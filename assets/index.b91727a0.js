import{r,R as o,W as y,C as g,a as M}from"./vendor.9e27cfd0.js";const H=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}};H();const S="hh-sol-artifact-1",W="HelloWeb3",A="contracts/HelloWeb3.sol",B=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"getTotalHellos",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"hello",outputs:[],stateMutability:"nonpayable",type:"function"}],R="0x608060405234801561001057600080fd5b506100596040518060400160405280600a81526020017f48656c6c6f20576562330000000000000000000000000000000000000000000081525061005e60201b6101081760201c565b6101e1565b6100fa81604051602401610072919061015f565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506100fd60201b60201c565b50565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b600061013182610181565b61013b818561018c565b935061014b81856020860161019d565b610154816101d0565b840191505092915050565b600060208201905081810360008301526101798184610126565b905092915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156101bb5780820151818401526020810190506101a0565b838111156101ca576000848401525b50505050565b6000601f19601f8301169050919050565b61054d806101f06000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806319ff1d211461003b578063ee55191614610045575b600080fd5b610043610063565b005b61004d6100bd565b60405161005a91906103db565b60405180910390f35b60016000808282546100759190610412565b925050819055506100bb6040518060400160405280601181526020017f25732068617320736169642068656c6c6f000000000000000000000000000000815250336101a1565b565b60006101006040518060400160405280601781526020017f5765206861766520256420746f74616c2077617665732100000000000000000081525060005461023d565b600054905090565b61019e8160405160240161011c9190610359565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506102d9565b50565b61023982826040516024016101b792919061037b565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506102d9565b5050565b6102d582826040516024016102539291906103ab565b6040516020818303038152906040527f9710a9d0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506102d9565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b61030b81610468565b82525050565b600061031c826103f6565b6103268185610401565b93506103368185602086016104a4565b61033f81610506565b840191505092915050565b6103538161049a565b82525050565b600060208201905081810360008301526103738184610311565b905092915050565b600060408201905081810360008301526103958185610311565b90506103a46020830184610302565b9392505050565b600060408201905081810360008301526103c58185610311565b90506103d4602083018461034a565b9392505050565b60006020820190506103f0600083018461034a565b92915050565b600081519050919050565b600082825260208201905092915050565b600061041d8261049a565b91506104288361049a565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561045d5761045c6104d7565b5b828201905092915050565b60006104738261047a565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b838110156104c25780820151818401526020810190506104a7565b838111156104d1576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f830116905091905056fea26469706673582212209ca854c11a346ad00d69ab263e78514f73ceab6210298bc6de4f07bfabcc678364736f6c63430008040033",L="0x608060405234801561001057600080fd5b50600436106100365760003560e01c806319ff1d211461003b578063ee55191614610045575b600080fd5b610043610063565b005b61004d6100bd565b60405161005a91906103db565b60405180910390f35b60016000808282546100759190610412565b925050819055506100bb6040518060400160405280601181526020017f25732068617320736169642068656c6c6f000000000000000000000000000000815250336101a1565b565b60006101006040518060400160405280601781526020017f5765206861766520256420746f74616c2077617665732100000000000000000081525060005461023d565b600054905090565b61019e8160405160240161011c9190610359565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506102d9565b50565b61023982826040516024016101b792919061037b565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506102d9565b5050565b6102d582826040516024016102539291906103ab565b6040516020818303038152906040527f9710a9d0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506102d9565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b61030b81610468565b82525050565b600061031c826103f6565b6103268185610401565b93506103368185602086016104a4565b61033f81610506565b840191505092915050565b6103538161049a565b82525050565b600060208201905081810360008301526103738184610311565b905092915050565b600060408201905081810360008301526103958185610311565b90506103a46020830184610302565b9392505050565b600060408201905081810360008301526103c58185610311565b90506103d4602083018461034a565b9392505050565b60006020820190506103f0600083018461034a565b92915050565b600081519050919050565b600082825260208201905092915050565b600061041d8261049a565b91506104288361049a565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561045d5761045c6104d7565b5b828201905092915050565b60006104738261047a565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b838110156104c25780820151818401526020810190506104a7565b838111156104d1576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f830116905091905056fea26469706673582212209ca854c11a346ad00d69ab263e78514f73ceab6210298bc6de4f07bfabcc678364736f6c63430008040033",F={},I={};var O={_format:S,contractName:W,sourceName:A,abi:B,bytecode:R,deployedBytecode:L,linkReferences:F,deployedLinkReferences:I};function P(){const[d,n]=r.exports.useState(),[i,l]=r.exports.useState(),[e,t]=r.exports.useState(!1),[a,v]=r.exports.useState(),[m,w]=r.exports.useState(!1),h="0xf89b37aC4bBf932F79a01e203E02F58F0bf768C3",p=O.abi,N=async()=>{const{ethereum:f}=window;if(f)console.log("We have the ethereum object",f);else{console.log("Make sure you have metamask!");return}const c=await f.request({method:"eth_accounts"});if(c.length>0){const b=c[0];console.log("Found an authorized account:",b),l(b)}else console.log("No authorized account found")},E=async()=>{try{const{ethereum:f}=window;if(!f){alert("Get MetaMask!");return}const c=await f.request({method:"eth_requestAccounts"});console.log("Connected",c[0]),l(c[0])}catch(f){console.log(f)}},k=async()=>{try{const{ethereum:f}=window;if(!f)return;const b=new y(f).getSigner(),s=await new g(h,p,b).getTotalHellos();n(s.toNumber())}catch(f){console.log(f)}},x=async()=>{try{const{ethereum:f}=window;if(!f)return;const b=new y(f).getSigner(),u=new g(h,p,b);t(!0);const s=await u.hello();console.log("Mining...",s.hash),await s.wait(),console.log("Mined -- ",s.hash),t(!1),v(s.hash);const C=await u.getTotalHellos();n(C.toNumber())}catch(f){console.log(f),f.code===4001&&w(!0)}};return r.exports.useEffect(()=>{N(),k()},[]),o.createElement("div",{className:"mainContainer"},o.createElement("div",{className:"dataContainer"},o.createElement("div",{className:"header"},"\u{1F44B} Well howdy."),o.createElement("div",{className:"bio"},"I am lonely and looking for friends to say hello."),o.createElement("div",{className:"bio"},"Your friendship will be logged forever."),d!==void 0&&o.createElement("div",{className:"bio"},`So far, only ${d} people have said hello.`),!a&&!m&&o.createElement("button",{className:"waveButton",onClick:x,disabled:e},e?"Remembering your hello...":"Say Hello. Please."),m&&o.createElement("div",{className:"denied"},"Why do you hate me?"),a!==void 0&&o.createElement("div",{className:"success"},o.createElement("a",{href:`https://ropsten.etherscan.io/tx/${a}`,target:"_blank"},"Proof of hello. No take-backs.")),!i&&o.createElement("button",{className:"waveButton",onClick:E},"Connect your Ethereum wallet and say hello.")))}M.render(o.createElement(o.StrictMode,null,o.createElement(P,null)),document.getElementById("root"));
