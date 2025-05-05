import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import Layout from '@/layouts/app-layout';
import { Listings, SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { Pencil } from 'lucide-react';

export default function Manage({ listings }: { listings: Listings[] }) {
    const { auth } = usePage<SharedData>().props;
    return (
        <Layout>
            <Head title="Manage" />
            <div className={'rounded border border-gray-200 p-10 dark:border-gray-600'}>
                <header>
                    <h1 className="my-6 text-center text-3xl font-bold uppercase">Manage Gigs</h1>
                </header>

                <table className="w-full table-auto rounded-sm">
                    <tbody>
                        {listings.length > 0 ? (
                            listings.map((listing) => (
                                <tr className="border-gray-300" key={listing.id}>
                                    <td className="border-t border-b border-gray-300 px-4 py-8 text-lg">
                                        <Link prefetch href={route('listings.show', [listing])}>
                                            {listing.company}
                                        </Link>
                                    </td>
                                    <td className="border-t border-b border-gray-300 px-4 py-8 text-lg">
                                        <Link
                                            prefetch
                                            href={route('listings.edit', [listing])}
                                            className="flex items-center gap-1 rounded-xl px-6 py-2 text-blue-400"
                                        >
                                            <Pencil size={17} />
                                            Edit
                                        </Link>
                                    </td>
                                    <td className="border-t border-b border-gray-300 px-4 py-8 text-lg">
                                        <Dialog>
                                            <DialogTrigger className={'cursor-pointer text-red-500 hover:text-red-400'}>Delete</DialogTrigger>
                                            <DialogContent>
                                                <DialogHeader>
                                                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                                                    <DialogDescription>
                                                        This action cannot be undone. This will permanently delete your account and remove your data
                                                        from our servers.
                                                    </DialogDescription>
                                                    <DialogFooter className={'flex items-center justify-between p-3'}>
                                                        <DialogClose asChild>
                                                            <Button type="button" variant="secondary">
                                                                Close
                                                            </Button>
                                                        </DialogClose>
                                                        <Button asChild variant={'destructive'}>
                                                            <Link href={route('listings.destroy', [listing])} method={'delete'}>
                                                                Delete
                                                            </Link>
                                                        </Button>
                                                    </DialogFooter>
                                                </DialogHeader>
                                            </DialogContent>
                                        </Dialog>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr className="border-gray-300">
                                <td className="border-t border-b border-gray-300 px-4 py-8 text-lg">
                                    <p className="text-center">No Listings Found</p>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
}
