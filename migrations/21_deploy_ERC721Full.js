const ERC721FullContract = artifacts.require("ERC721FullContract"); 

module.exports = function(deployer) {
    deployer.deploy(ERC721FullContract,
    //构造函数的参数
    "My Game Token","MGT",'https://github.com/Fankouzu/MintCoin/blob/master/');
};