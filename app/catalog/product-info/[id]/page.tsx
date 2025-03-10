interface IProductInfo {
  params: Promise<{ id: string }>;
}

const ProductInfo = async ({ params }: IProductInfo) => {
  const { id } = await params;

  return <div>ProductInfo Page for {id}</div>;
};

export default ProductInfo;
