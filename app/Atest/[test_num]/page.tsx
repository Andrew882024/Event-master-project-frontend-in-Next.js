const test = async ({ params }: { params: Promise<{ test_num: string }> }) => {
  const wating = await params;
  return <div>test page { wating.test_num}</div>;
};

export default test;