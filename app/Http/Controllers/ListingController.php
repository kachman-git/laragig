<?php

namespace App\Http\Controllers;

use App\Models\Listing;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class ListingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $listings = Listing::latest()->filter(request(['tag', 'search']))->paginate(10);
        return Inertia::render('welcome', ['listings' => $listings]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Listing $listing)
    {

        return Inertia::render('Listings/ShowListing', compact('listing'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Listing $listing)
    {
        return Inertia::render('Listings/EditListing', compact('listing'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Listing $listing)
    {

//        if($listing->user_id != auth()->id()) {
//            abort(403, 'Unauthorized Action');
//        }
        $formFields = $request->validate([
            'title' => 'required',
            'company' => ['required'],
            'location' => 'required',
            'website' => 'required',
            'email' => ['required', 'email'],
            'tags' => 'required',
            'description' => 'required'
        ]);

        if ($request->hasFile('logo')) {
            $formFields['logo'] = $request->file('logo')->store('logos', 'public');
        }

        $listing->update($formFields);

        return back()->with('message', 'Listing updated successfully!');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $logo = null;
        if ($request->file('logo')) {
            $logo = $request->file('logo')->store('logos', 'public');
        }

        $formData = $request->validate([
            'title' => 'required|string',
            'description' => 'required|string',
            'location' => 'required|string',
            'tags' => 'required',
            'logo' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg',
            'company' => ['required', Rule::unique('listings', 'company')],
            'website' => 'required|string',
            'email' => 'required|email'

        ]);


        Listing::create([
            'title' => $formData['title'],
            'description' => $formData['description'],
            'location' => $formData['location'],
            'company' => $formData['company'],
            'website' => $formData['website'],
            'email' => $formData['email'],
            'logo' => $logo,
            'tags' => $formData['tags'],
        ]);
        return Redirect::route('dashboard')->with('success', 'Listing created.');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Listings/CreateListing');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Listing $listing)
    {
        if ($listing->user_id != auth()->id()) {
            abort(403, 'Unauthorized Action');
        }

        if ($listing->logo && Storage::disk('public')->exists($listing->logo)) {
            Storage::disk('public')->delete($listing->logo);
        }
        return Redirect::route('home')->with('success', 'Listing deleted.');
    }

    public function manage()
    {
        return Inertia::render('Listings/Manage', ['listings' => auth()->user()->listings()->get()]);
    }
}
