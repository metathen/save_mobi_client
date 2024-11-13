import { ProductCard } from '../productCard';
import { SectionTitle } from '../sectionTitle';

export const Products = () => {
    const productArr = [
        {
            //Общие
            id: '1',
            title: 'Honor lite 90S',
            type: "Смартфоны",
            year: 2024,

            //Процессор и ОС
            processorModel: "MediaTek Helio G36",
            processorFrequency: "2.5",
            processorCorse: "8",
            system: "Android",
            systemVersion: "Android 13",
            graphicsAccelerator: "PowerVR GE8320",
            techProcess: "12",

            //Экран
            screenDiagonal: "6.56",
            screenResolution: "1612x720",
            typeMatrix: "IPS",
            screenRefreshRate: "90",

            //Память
            ram: "8",
            data: "256",
            memoryCardSlot: "есть",

            //Камера
            numberCamera: "3",
            megapixelMainCamera: "50+0.5",
            autofocusMainCamera: "есть",

            //Информация
            price: '26 000',
            images: ['../../../image-times/Rectangle 167 (2).png', '../../../image-times/Rectangle 167 (2).png']
        },
        {
            id: '2',
            type: "Смартфоны",
            title: 'Honor lite 90S',
            year: 2024,

            //Процессор и ОС
            processorModel: "MediaTek Helio G36",
            processorFrequency: "2.5",
            processorCorse: "8",
            system: "Android",
            systemVersion: "Android 13",
            graphicsAccelerator: "PowerVR GE8320",
            techProcess: "12",

            //Экран
            screenDiagonal: "6.56",
            screenResolution: "1612x720",
            typeMatrix: "IPS",
            screenRefreshRate: "90",

            //Память
            ram: "8",
            data: "256",
            memoryCardSlot: "есть",

            //Камера
            numberCamera: "3",
            megapixelMainCamera: "50+0.5",
            autofocusMainCamera: "есть",

            //Информация
            price: '26 000',
            images: ['../../../image-times/Rectangle 167 (2).png', '../../../image-times/Rectangle 167 (2).png']
        },
        {
            id: '3',
            type: "Смартфоны",
            title: 'Honor lite 90S',
            year: 2024,

            //Процессор и ОС
            processorModel: "MediaTek Helio G36",
            processorFrequency: "2.5",
            processorCorse: "8",
            system: "Android",
            systemVersion: "Android 13",
            graphicsAccelerator: "PowerVR GE8320",
            techProcess: "12",

            //Экран
            screenDiagonal: "6.56",
            screenResolution: "1612x720",
            typeMatrix: "IPS",
            screenRefreshRate: "90",

            //Память
            ram: "8",
            data: "256",
            memoryCardSlot: "есть",

            //Камера
            numberCamera: "3",
            megapixelMainCamera: "50+0.5",
            autofocusMainCamera: "есть",

            //Информация
            price: '26 000',
            images: ['../../../image-times/Rectangle 167 (2).png', '../../../image-times/Rectangle 167 (2).png']
        },
        {
            id: '4',
            type: "Смартфоны",
            title: 'Honor lite 90S',
            year: 2024,

            //Процессор и ОС
            processorModel: "MediaTek Helio G36",
            processorFrequency: "2.5",
            processorCorse: "8",
            system: "Android",
            systemVersion: "Android 13",
            graphicsAccelerator: "PowerVR GE8320",
            techProcess: "12",

            //Экран
            screenDiagonal: "6.56",
            screenResolution: "1612x720",
            typeMatrix: "IPS",
            screenRefreshRate: "90",

            //Память
            ram: "8",
            data: "256",
            memoryCardSlot: "есть",

            //Камера
            numberCamera: "3",
            megapixelMainCamera: "50+0.5",
            autofocusMainCamera: "есть",

            //Информация
            price: '26 000',
            images: ['../../../image-times/Rectangle 167 (2).png', '../../../image-times/Rectangle 167 (2).png']
        }
    ]
    return (
        <section className="product" id='product' style={{color: 'white'}}>
            <div className="product-box box">
                <SectionTitle text='Каталог' />
                <div className="product-items d-grid col-2 gap-[20px] pt-[40px]">
                    {
                        productArr.length > 0 ? productArr.map(i => (
                            <ProductCard 
                                id={i.id}
                                title={i.title}
                                ram={i.ram}
                                type={i.type}
                                year={i.year}
                                processor={i.processorModel}
                                price={i.price}
                                image={i.images[0]}
                            />
                        ))
                        : null
                    }
                </div>
            </div>
        </section>
    )
}
