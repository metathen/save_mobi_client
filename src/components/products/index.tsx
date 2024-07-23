import { ProductCard } from '../productCard';
import { SectionTitle } from '../sectionTitle';

export const Products = () => {
    const productArr = [
        {
            id: '1',
            title: 'Honor lite 90S',
            subtitle: '90гц процессор, 40мп камера, 6гб оператива, матовый экран',
            price: '26 000',
            image: '../../../image-times/Rectangle 167 (2).png'
        },
        {
            id: '2',
            title: 'Honor lite 90S',
            subtitle: '90гц процессор, 40мп камера, 6гб оператива, матовый экран',
            price: '26 000',
            image: '../../../image-times/Rectangle 167 (2).png'
        },
        {
            id: '3',
            title: 'Honor lite 90S',
            subtitle: '90гц процессор, 40мп камера, 6гб оператива, матовый экран',
            price: '26 000',
            image: '../../../image-times/Rectangle 167 (2).png'
        },
        {
            id: '4',
            title: 'Honor lite 90S',
            subtitle: '90гц процессор, 40мп камера, 6гб оператива, матовый экран',
            price: '26 000',
            image: '../../../image-times/Rectangle 167 (2).png'
        }
    ]
    return (
        <section className="product" id='product' style={{color: 'white'}}>
            <div className="product-box box">
                <SectionTitle text='Продукты' />
                <div className="product-items d-grid col-2 gap-[20px] pt-[40px]">
                    {
                        productArr.length > 0 ? productArr.map(i => (
                            <ProductCard 
                                id={i.id}
                                title={i.title}
                                subtitle={i.subtitle}
                                price={i.price}
                                image={i.image}
                            />
                        ))
                        : null
                    }
                </div>
            </div>
        </section>
    )
}
