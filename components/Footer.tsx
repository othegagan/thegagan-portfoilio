import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='py-4'>
            <div className='container flex flex-col items-center justify-between gap-4  '>
                <p className='text-center text-sm font-normal leading-loose text-neutral-400 '>
                    Designed and developed by{' '}
                    <Link href='https://github.com/othegagan' target='_blank' rel='noreferrer' className='font-medium text-white underline underline-offset-4'>
                        Gagan Kumar
                    </Link>
                    <span className='mx-1'>in</span>
                    <Link href='https://figma.com' target='_blank' rel='noreferrer' className='font-medium text-white underline underline-offset-4'>
                        Figma
                    </Link>{' '}
                    and <span className='font-medium text-white '>VS Code </span>. Crafted with{' '}
                    <Link href='https://nextjs.org/' target='_blank' rel='noreferrer' className='font-medium text-white underline underline-offset-4'>
                        Nextjs 14{' '}
                    </Link>{' '}
                    and{' '}
                    <Link href='https://tailwindcss.com/' target='_blank' rel='noreferrer' className='font-medium text-white underline underline-offset-4'>
                        Tailwind CSS{' '}
                    </Link>
                    , deployed with{' '}
                    <Link href='https://vercel.com/' target='_blank' rel='noreferrer' className='font-medium text-white underline underline-offset-4'>
                        Vercel{' '}
                    </Link>{' '}
                    and{' '}
                    <Link href='https://github.com/othegagan' target='_blank' rel='noreferrer' className='font-medium text-white underline underline-offset-4'>
                        GitHub
                    </Link>
                    .
                </p>
            </div>
        </footer>
    );
};

export default Footer;
