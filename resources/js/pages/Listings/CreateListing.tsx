import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Layout from '@/layouts/app-layout';
import { Head, Link, useForm } from '@inertiajs/react';
import React, { FormEvent } from 'react';

export default function CreateListing() {
    const { data, setData, processing, errors, post, reset } = useForm({
        company: '',
        created_at: '',
        description: '',
        email: '',
        location: '',
        logo: null as File | null,
        tags: '',
        title: '',
        updated_at: '',
        website: '',
    });
    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(data);
        post(route('listings.store'), {
            onSuccess: () => {
                reset();
            },
        });
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setData('logo', e.target.files[0]);
        }
    };

    return (
        <Layout>
            <Head title="LaraGigs | Find Laravel Jobs & Projects" />
            <div className="mx-4">
                <div className="mx-auto mt-24 max-w-lg rounded border p-10">
                    <header className="text-center">
                        <h2 className="mb-1 text-2xl font-bold uppercase">Create a Gig</h2>
                        <p className="mb-4">Post a gig to find a developer</p>
                    </header>

                    <form onSubmit={submit}>
                        <div className="mb-6">
                            <Label htmlFor="company" className="mb-2 inline-block text-lg">
                                Company Name
                            </Label>

                            <Input
                                type="text"
                                value={data.company}
                                onChange={(e) => setData('company', e.target.value)}
                                className="p-2"
                                name="company"
                            />
                            <InputError message={errors.company} />
                        </div>

                        <div className="mb-6">
                            <Label htmlFor="title" className="mb-2 inline-block text-lg">
                                Job Title
                            </Label>

                            <Input
                                type="text"
                                value={data.title}
                                onChange={(e) => setData('title', e.target.value)}
                                className="p-2"
                                name="title"
                                placeholder="Example: Senior Laravel Developer"
                            />
                            <InputError message={errors.title} />
                        </div>

                        <div className="mb-6">
                            <Label htmlFor="location" className="mb-2 inline-block text-lg">
                                Job Location
                            </Label>

                            <Input
                                type="text"
                                value={data.location}
                                onChange={(e) => setData('location', e.target.value)}
                                className="p-2"
                                name="location"
                                placeholder="Example: Remote, Boston MA, etc"
                            />
                            <InputError message={errors.location} />
                        </div>

                        <div className="mb-6">
                            <Label htmlFor="email" className="mb-2 inline-block text-lg">
                                Contact Email
                            </Label>

                            <Input type="email" value={data.email} onChange={(e) => setData('email', e.target.value)} className="p-2" name="email" />
                            <InputError message={errors.email} />
                        </div>

                        <div className="mb-6">
                            <Label htmlFor="website" className="mb-2 inline-block text-lg">
                                Website/Application URL
                            </Label>

                            <Input
                                type="text"
                                value={data.website}
                                onChange={(e) => setData('website', e.target.value)}
                                className="p-2"
                                name="website"
                            />
                            <InputError message={errors.website} />
                        </div>

                        <div className="mb-6">
                            <Label htmlFor="tags" className="mb-2 inline-block text-lg">
                                Tags (Comma Separated)
                            </Label>

                            <Input
                                type="text"
                                value={data.tags}
                                onChange={(e) => setData('tags', e.target.value)}
                                className="p-2"
                                name="tags"
                                placeholder="Example: Laravel, Backend, Postgres, etc"
                            />
                            <InputError message={errors.tags} />
                        </div>

                        <div className="mb-6">
                            <Label htmlFor="logo" className="mb-2 inline-block text-lg">
                                Company Logo
                            </Label>

                            <Input type="file" onChange={handleFileUpload} className="p-2" name="logo" />
                            <InputError message={errors.logo} />
                        </div>

                        <div className="mb-6 grid gap-2">
                            <Label htmlFor="description" className="mb-2 inline-block text-lg">
                                Job Description
                            </Label>
                            <textarea
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                                className="p-2"
                                name="description"
                                rows={10}
                                placeholder="Include tasks, requirements, salary, etc"
                            ></textarea>
                            <InputError message={errors.description} />
                        </div>

                        <div className="mb-6">
                            <Button variant={'outline'} disabled={processing} className="bg-laravel rounded px-4 py-2 text-black dark:text-white">
                                Create Gig
                            </Button>

                            <Link prefetch href="/" className="ml-4">
                                {' '}
                                Back{' '}
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
}
