import DashMenuItem from '@/components/DashMenuItem'

const Products = ({ products }) => {
  return (
    <div className={'container flex w-full flex-col items-center gap-y-[1rem]'}>
      {products.map((p) => {
        return (
          <DashMenuItem
            key={p.text}
            img={p.img_url}
            type={'order'}
            text={p.name}
            orders={p.orders}
            completed={p.completed}
            customerName={p.customer_name}
            created_at={p.created_at}
          />
        )
      })}
    </div>
  )
}

export default Products
