"use client";
import { useState } from "react";
import { useAccount, useBalance, useReadContract } from "wagmi";
import { Button } from "@/components/ui/button";

export function TokenBalance() {
	const [showBalance, setShowBalance] = useState(false);
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

	const handleToggleBalance = () => {
		setShowBalance(!showBalance);
	};

	if (!address) {
		return (
			<Button variant="outline" disabled>
				Connect wallet to see balance
			</Button>
		);
	}

	return (
		<div className="flex flex-col items-center gap-2">
			<Button 
				onClick={handleToggleBalance}
				variant="default"
				className="w-fit"
			>
				{showBalance ? 'Hide Balance' : 'Show Balance'}
			</Button>
			
			{showBalance && (
				<div className="text-center">
					{isLoading && <div>Loading balance...</div>}
					{isError && <div>Error fetching balance</div>}
					{balance && !isLoading && !isError && (
						<div>Balance: {balance.formatted} {balance.symbol}</div>
					)}
				</div>
			)}
		</div>
	);
}
