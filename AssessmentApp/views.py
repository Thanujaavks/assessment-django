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
                    'year': row['year'],
                    'StudentID': row['StudentID'],
                     'First Name': row['First Name'],
                    'Last Name': row['Last Name'],
                    'Year Level': row['Year Level'],
                     'Class': row['Class'],
                    'Subject': row['Subject'],
                    'Answers': row['Answers'],   # Keys should be strings
                    'Correct Answers': row['Correct Answers'],
                    'Question Number': row['Question Number'],
                     'Subject Contents': row['Subject Contents'],
                    'Assessment Areas': row['Assessment Areas'],
                    'sydney_correct_count_percentage': row['sydney_correct_count_percentage'],
                     'sydney_average_score': row['Csydney_average_scorelass'],
                    'Subject': row['Subject'],
                     'sydney_participants': row['sydney_participants'],
                     'student_score': row['student_score'],
                    'student_total_assessed': row['student_total_assessed'],
                     'student_area_assessed_score': row['student_area_assessed_score'],
                    'total_area_assessed_score': row['total_area_assessed_score'],
                     'participant': row['participant'],
                     'correct_answer_percentage_per_class': row['correct_answer_percentage_per_class'],
                    'average_score': row['average_score'],
                    'school_percentile': row['school_percentile'],
                     'student_score': row['student_score'],
                    'student_total_assessed': row['student_total_assessed'],
                     'student_area_assessed_score': row['student_area_assessed_score'],
                    'total_area_assessed_score': row['total_area_assessed_score'],
                     'participant': row['participant'],
                     'correct_answer_percentage_per_class': row['correct_answer_percentage_per_class'],
                    'average_score': row['average_score']
                }
                )
            except Exception as e:
                return Response({'error': str(e)}, status=400)

        return Response({'message': array})
            
            