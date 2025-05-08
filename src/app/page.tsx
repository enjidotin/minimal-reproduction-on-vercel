import Image from "next/image";
import { IntegrailCloudApi } from "integrail-sdk-cloud/src/api/cloud/cloud.api";

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<div>
				<IntegrailCloudApi
					apiKey={process.env.INTEGRAIL_API_KEY}
					environment={process.env.INTEGRAIL_ENVIRONMENT}
				>
					<div>Hello</div>
				</IntegrailCloudApi>
			</div>
		</div>
	);
}
