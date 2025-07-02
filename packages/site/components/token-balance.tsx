"use client";
import { useAccount, useBalance, useReadContract } from "wagmi";

export function TokenBalance() {
	const { address } = useAccount();
	const {
		data: balance,
		isError,
		isLoading,
	} = useBalance({
		address,
	});

	// const {
	// 	data: balance,
	// } = useReadContract({
	// 	address,
	// 	abi: [
	// 		{
	// 			name: "balanceOf",
	// 			type: "function",
	// 			stateMutability: "view",
	// 			inputs: [{ name: "owner", type: "address" }],
	// 			outputs: [{ name: "balance", type: "uint256" }],
	// 		},
	// 	],
	// 	functionName: "balanceOf",
	// 	args: ["0x03A71968491d55603FFe1b11A9e23eF013f75bCF"],
	// });

	if (isLoading) return <div>Loading balance...</div>;
	if (isError) return <div>Error fetching balance</div>;

	return <div>Balance: {balance?.value}</div>;
}
