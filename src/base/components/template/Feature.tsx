'use client'
import { motion } from 'framer-motion'
import Image from 'next/legacy/image'
import { useTranslations } from 'next-intl'
import React, { useMemo } from 'react'

import ScrollAnimationWrapper from '@/base/components/layout/ScrollAnimationWrapper'
import { getScrollAnimation } from '@/base/utils/getScrollAnimation'

const Feature = () => {
  const t = useTranslations('HomePage')
  const scrollAnimation = useMemo(() => getScrollAnimation(), [])

  const features = [
    t('Powerful online protection'),
    t('Internet without borders'),
    t('Supercharged VPN'),
    t('No specific time limits'),
  ]

  return (
    <div className='container mx-auto mb-6 mt-8 px-8 sm:mb-14 sm:mt-14 xl:px-16' id='feature'>
      <div className='p y-8 my-12 grid grid-flow-row grid-cols-1 gap-8 sm:grid-flow-col sm:grid-cols-2'>
        <ScrollAnimationWrapper className='flex w-full justify-end'>
          <motion.div className='h-full w-full p-4' variants={scrollAnimation}>
            <Image
              src='/assets/images/Illustration2.png'
              alt='VPN Illustrasi'
              layout='responsive'
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.div
            className='ml-auto flex w-full flex-col items-end justify-center lg:w-9/12'
            variants={scrollAnimation}
          >
            <h3 className='text-3xl font-medium leading-relaxed text-black lg:text-4xl'>
              {t('We Provide Many Features You Can Use')}
            </h3>
            <p className='my-2 text-black'>{t('Feature title')}</p>
            <ul className='ml-8 list-inside self-start text-black'>
              {features.map((feature, index) => (
                <motion.li
                  className='circle-check custom-list relative'
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  key={feature}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  )
}

export default Feature
