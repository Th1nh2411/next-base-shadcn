import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { UserAuthForm } from './auth-form'
import Image from 'next/image'
import { Icons } from '@/base/components/icons'

export const metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.',
}

export default function AuthenticationPage() {
  const t = useTranslations('LoginPage')

  return (
    <div className='flex h-screen'>
      <div className='container relative flex-col items-center justify-center md:grid lg:grid-cols-2 lg:px-0 rounded-md overflow-hidden border m-auto h-[750px]'>
        <Link
          href='/auth/register'
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'absolute right-4 top-4 md:right-8 md:top-8'
          )}
        >
          {t('Register')}
        </Link>
        <div className='relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex'>
          <div className='absolute inset-0 bg-zinc-900' />
          <div className='relative z-20 flex items-center text-lg font-medium'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='mr-2 h-6 w-6'
            >
              <path d='M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3' />
            </svg>
            R1n Product Inc
          </div>
          <Icons.logo className='relative z-20 h-fit m-auto' />
          <div className='relative z-20'>
            <blockquote className='space-y-2'>
              <p className='text-lg'>&ldquo;{t('Quote')}&rdquo;</p>
              <footer className='text-sm'>{t('Quote Author')}</footer>
            </blockquote>
          </div>
        </div>
        <div className='lg:p-8'>
          <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
            <div className='flex flex-col space-y-2 text-center'>
              <h1 className='text-2xl font-semibold tracking-tight'>{t('Create an account')}</h1>
              <p className='text-sm text-muted-foreground'>
                {t('Enter your email below to create your account')}
              </p>
            </div>
            <UserAuthForm />
            <p className='px-8 text-center text-sm text-muted-foreground'>
              {t('By clicking continue, you agree to our')}{' '}
              <Link href='/terms' className='underline underline-offset-4 hover:text-primary'>
                {t('Terms of Service')}
              </Link>{' '}
              {t('and')}{' '}
              <Link href='/privacy' className='underline underline-offset-4 hover:text-primary'>
                {t('Privacy Policy')}
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
