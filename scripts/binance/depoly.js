const {
  ethers
} = require("hardhat");


async function main() {
  const [owner] = await ethers.getSigners();
  //deploy phase

  console.log("owner address:", owner.address);

  //deploy kusa
  const KUSA = await hre.ethers.getContractFactory("KusaToken");
  const kusa = await KUSA.connect(owner).deploy("Kusa Token", "KUSA");
  console.log("kusa address:", kusa.address);

  // const KUSA_address = "0xcc21fd52e0E01E82B33d653a148D1aAEAD62320c"
  // const pool1_lp = "0x4c954e4a94feaa8961c05090ea0b7de41d23a4b3"
  // const pool2_lp = "0xd24085aa69b2d19e757da29f46c623d74cf7b7fc"

  // const KUSA = await hre.ethers.getContractFactory("KusaToken");
  // const kusa = KUSA.attach(KUSA_address)
  // const kusa = await KUSA.connect(owner).deploy("Kusa Token", "KUSA");


  //deploy chef
  const CHEF = await hre.ethers.getContractFactory("MasterChef");
  const chef = await CHEF.connect(owner).deploy(
    kusa.address,
    owner.address,  //address of beneficiary
    "3000000000000000000", //3 KUSA per block
    0, // start right after deploy
  )

  console.log("chef address:",chef.address);


  //grant cheif ability to mint
  await kusa.connect(owner).addPartner(chef.address, "33000000000000000000000000000");  //33 billion
  console.log("partner added")

  await kusa.connect(owner)["mint(uint256)"]("10000000000000000000000")
  console.log("minted")

  //add pool1
  // await chef.add(1000, pool1_lp, false)

  //add pool2
  // await chef.add(1000, pool2_lp, false)

  console.log("All Set!")

}

main().then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
})
