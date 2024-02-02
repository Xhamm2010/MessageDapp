import { ethers } from "hardhat";

async function main() {
  
  const myMessage = await ethers.deployContract("MyMessage", ["I love Coding"]);
  const [owner] = await ethers.getSigners();
  await myMessage.waitForDeployment();

  console.log(
  `My Message contract deployed to ${myMessage.target}`
  );
 }

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
