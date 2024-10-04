from django.shortcuts import render
import pandas as pd


from rest_framework import status

from rest_framework.views import APIView
from rest_framework.response import Response

from django.utils import timezone


class BookingViewSet(APIView):

    
    def post(self, request, *args, **kwargs):
        array = []
        file = request.FILES['file']
        if not file.name.endswith('.csv'):
            return Response({'error': 'This is not a CSV file'}, status=400)

        # Read the CSV file
        df = pd.read_csv(file)

        # Validate and save data to the database
        for index, row in df.iterrows():
            try:
                array.append({
                   'school_name': row['school_name'],   # Keys should be strings
                    # 'year': row['year'],
                    # 'StudentID': row['StudentID']
                }
                )
            except Exception as e:
                return Response({'error': str(e)}, status=400)

        return Response({'message': array})
            
            