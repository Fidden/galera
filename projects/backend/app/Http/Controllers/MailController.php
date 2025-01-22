<?php

namespace App\Http\Controllers;

use App\Mail\ContactFormMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public function index(Request $request)
    {
        Mail::to('somemail@gmail.com')
            ->send(new ContactFormMail($request->all()));

        return response()->json(null, 204);
    }
}
