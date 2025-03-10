from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import os

ROCKYOU_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "rockyou.txt")

def search_passwords(query, max_results=10):
    results = []
    try:
        with open(ROCKYOU_FILE, "r", encoding="latin-1") as file:
            for line in file:
                if query in line.strip():
                    results.append(line.strip())
                    if len(results) >= max_results:
                        break
    except FileNotFoundError:
        return results
    return results

@csrf_exempt
def search_view(request):
    query = request.GET.get("q", "").strip()
    if not query:
        return JsonResponse({"error": "Query is empty"}, status=400)
    
    results = search_passwords(query)
    return JsonResponse({"results": results})