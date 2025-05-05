import type { SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';

const Hero = () => {
    const { auth } = usePage<SharedData>().props;
    return (
        <div className={'bg-laravel'}>
            <section className="align-center relative mb-4 flex h-72 flex-col justify-center space-y-4 text-center">
                <div className="absolute top-0 left-0 h-full w-full bg-[url('images/laravel-logo.png')] bg-center bg-no-repeat opacity-10"></div>

                <div className="z-10">
                    <h1 className="text-6xl font-bold text-white uppercase">
                        Lara<span className="text-black">Gigs</span>
                    </h1>
                    <p className="my-4 text-2xl font-bold text-gray-200">Find or post Laravel jobs & projects</p>
                    <div>
                        {auth.user ? (
                            <Link
                                prefetch
                                href={route('listings.create')}
                                className="mt-2 inline-block rounded-xl border-2 border-white px-4 py-2 text-white uppercase hover:border-black hover:text-black"
                            >
                                Create a Gig
                            </Link>
                        ) : (
                            <Link
                                prefetch
                                href={route('register')}
                                className="mt-2 inline-block rounded-xl border-2 border-white px-4 py-2 text-white uppercase hover:border-black hover:text-black"
                            >
                                Sign Up to List a Gig
                            </Link>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
