import DashMenuItem from '@/components/DashMenuItem'

const Products = ({ products }) => {
  return (
    <div className={'container flex w-full flex-col items-center gap-y-[1rem]'}>
      {products.map((p) => {
        return (
          <DashMenuItem
            key={p.text}
            img={p.img}
            type={'product'}
            text={p.name}
            orders={p.orders}
          />
        )
      })}
    </div>
  )
}

export default Products
