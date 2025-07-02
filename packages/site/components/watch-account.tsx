"use client";
import { useAccountEffect } from "wagmi";

export function WatchAccount() {
	useAccountEffect({
		onConnect(data) {
			console.log("Connected!", {
				address: data.address,
				chainId: data.chainId,
				isReconnected: data.isReconnected,
			});
		},
		onDisconnect() {
			console.log("Disconnected!");
		},
	});

	return <div>Watching for account changes...</div>;
}
