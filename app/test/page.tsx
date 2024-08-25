export default function Page() {
  console.log('PROJECT_ID:', process.env.PROJECT_ID);
  console.log('ENDPOINT:', process.env.ENDPOINT);
  console.log('NEXT_PUBLIC_BUCKET_ID:', process.env.NEXT_PUBLIC_BUCKET_ID);

  return (
    <div>
      <p>Project ID: {process.env.PROJECT_ID}</p>
      <p>Bucket ID: {process.env.NEXT_PUBLIC_BUCKET_ID}</p>
      <p>EndPoint {process.env.NEXT_PUBLIC_ENDPOINT}</p>
    </div>
  );
}
