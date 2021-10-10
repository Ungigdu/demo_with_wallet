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

  //deploy chief
  const CHIEF = await hre.ethers.getContractFactory("MasterChef");
  const chief = await CHIEF.connect(owner).deploy(
    kusa.address,
    owner.address,  //address of beneficiary
    "3000000000000000000", //3 KUSA per block
    0, // start right after deploy
  )

  console.log("chief address:",chief.address);


  //grant cheif ability to mint
  await kusa.connect(owner).addPartner(chief.address, "33000000000000000000000000000");  //33 billion

  console.log("All Set!")

}

main().then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
})
