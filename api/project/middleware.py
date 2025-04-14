from django.http import HttpResponsePermanentRedirect
from django.middleware.common import CommonMiddleware
from django.utils.http import escape_leading_slashes

# Should fix upload issue
class CommonMiddlewareAppendSlashWithoutRedirect(CommonMiddleware):
    def process_request(self, request):
        response = super().process_request(request)
        if response and request.method in ('POST', 'PUT', 'DELETE'):
            return None
        return response