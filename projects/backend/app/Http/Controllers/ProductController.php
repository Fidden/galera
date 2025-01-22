<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Returns products by category id
     *
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function index(Request $request): JsonResponse
    {
        return response()->json(
            ProductResource::collection(
                Product::query()
                ->where('category_id', $request->get('category_id'))
                ->get()
            )
        );
    }
}
