import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'

const Preview = ({
  listPreview = [
    {
      name: 'iezh Robert',
      image: '/assets/images/people.png',
      city: 'Warsaw',
      country: 'Poland',
      rating: '4.5',
      content:
        'Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best',
    },
    {
      name: 'iezh Robert',
      image: '/assets/images/people.png',
      city: 'Warsaw',
      country: 'Poland',
      rating: '4.5',
      content:
        'Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best',
    },
    {
      name: 'iezh Robert',
      image: '/assets/images/people.png',
      city: 'Warsaw',
      country: 'Poland',
      rating: '4.5',
      content:
        'Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best',
    },
    {
      name: 'iezh Robert',
      image: '/assets/images/people.png',
      city: 'Warsaw',
      country: 'Poland',
      rating: '4.5',
      content:
        'Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best',
    },
  ],
}) => {
  return (
    <>
      <Carousel>
        <CarouselContent>
          {listPreview.map((previewItem, index) => (
            <CarouselItem key={index}>
              <div className='flex items-stretch px-3'>
                <div className='flex flex-col rounded-lg border-2 border-gray p-8 transition-all hover:border-orange-500'>
                  <div className='flex w-full flex-col items-stretch xl:flex-row xl:items-center'>
                    <div className='order-2 flex xl:order-1'>
                      <Image src={previewItem.image} height={50} width={50} alt='Icon People' />
                      <div className='ml-5 flex flex-col text-left'>
                        <p className='text-lg capitalize text-black'>{previewItem.name}</p>
                        <p className='text-sm capitalize text-black'>
                          {previewItem.city},{previewItem.country}
                        </p>
                      </div>
                    </div>
                    <div className='order-1 ml-auto flex flex-none items-center xl:order-2'>
                      <p className='text-sm'>{previewItem.rating}</p>
                      <span className='ml-4 flex'>
                        <Image
                          className='h-4 w-4'
                          src='/assets/icons/template/stars.svg'
                          alt='star'
                          height={30}
                          width={30}
                        />
                      </span>
                    </div>
                  </div>
                  <p className='mt-5 text-left'>{previewItem.content}.</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  )
}

export default Preview
