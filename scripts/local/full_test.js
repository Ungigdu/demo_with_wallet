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

  //test owner mint
  await kusa.connect(owner)["mint(uint256)"]("1000000000000000000000000") // 1 million kusa

  //deploy chief
  const CHIEF = await hre.ethers.getContractFactory("MasterChef");

  //                                                            beneficiary     KUSA perblock       start block
  const chief = await CHIEF.connect(owner).deploy(kusa.address,owner.address, "3000000000000000000", 0)

  console.log("chief address:",chief.address);


  //grant cheif ability to mint
  // await kusa.connect(owner).addPartner(chief.address, "1000000000000000000000000");

  //test KUSA single pool farming
  await kusa.connect(owner).approve(chief.address, "1000000000000000000000000")

  await chief.connect(owner).enterStaking("100000000000000000000000")

  console.log("All Set!")

}

main().then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
})
