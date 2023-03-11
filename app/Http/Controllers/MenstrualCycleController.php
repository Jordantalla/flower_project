<?php

namespace App\Http\Controllers;

use App\Models\MenstrualCycle;
use Illuminate\Http\Request;

class MenstrualCycleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $cycle= MenstrualCycle::all();

        return view('cycles.index', compact('cycles'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('cycles.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $cycle=new MenstrualCycle();

        $cycle->start_date = $request->input('start_date');
        $cycle->end_date = $request->input('end_date');
        $cycle->cycle_length = $request->input('cycle_length');

        $cycle->save();

        return redirect()->route('cycles.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(MenstrualCycle $menstrualCycle)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $cycle = MenstrualCycle::findOrFail($id);

        return view('cycles.edit', compact('cycle'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $cycle = MenstrualCycle::findOrFail($id);
        $cycle->start_date=$request->input('start_date');
        $cycle->end_date=$request->input('end_date');
        $cycle->cycle_length=$request->input('cycle_length');

        $cycle->save();

        return redirect()->route('cycles.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $cycle= MenstrualCycle::findOrFail($id);
        $cycle->delete();

        return redirect()->route('cycles.index');
    }
}
