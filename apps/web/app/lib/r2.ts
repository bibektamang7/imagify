import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const R2_ACCOUNT_ID = process.env.NEXT_PUBLIC_R2_ACCOUNT_ID!;
const R2_ACCESS_KEY_ID = process.env.NEXT_PUBLIC_R2_ACCESS_KEY_ID!;
const R2_SECRET_ACCESS_KEY = process.env.NEXT_PUBLIC_R2_SECRET_ACCESS_KEY!;
const R2_BUCKET = process.env.NEXT_PUBLIC_R2_BUCKET!;
const S3 = new S3Client({
	region: "auto",
	endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
	credentials: {
		accessKeyId: R2_ACCESS_KEY_ID,
		secretAccessKey: R2_SECRET_ACCESS_KEY,
	},
});

export async function uploadFile(file: Buffer, key: string) {
	const command = new PutObjectCommand({
		Bucket: R2_BUCKET,
		Key: key,
		Body: file,
	});
	try {
		const response = await S3.send(command);
		return response;
	} catch (error) {
		throw error;
	}
}

export async function getSignedUrlForUpload(
	key: string,
	contentType: string
): Promise<string> {
	const command = new PutObjectCommand({
		Bucket: R2_BUCKET,
		Key: key,
		ContentType: contentType,
	});

	try {
		const signedUrl = await getSignedUrl(S3, command, { expiresIn: 3600 });
		return signedUrl;
	} catch (error) {
		throw Error;
	}
}
