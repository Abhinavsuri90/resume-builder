#!/bin/bash

# Authentication Testing Script
# This tests all authentication endpoints to ensure zero errors

echo "🔍 Testing Resume Builder Authentication System..."
echo "=================================================="

# Test 1: Health Check
echo ""
echo "✅ Test 1: Health Check Endpoint"
HEALTH_RESPONSE=$(curl -s https://resume-builder-xw2z.onrender.com/)
echo "Response: $HEALTH_RESPONSE"

# Test 2: Register New User (with timestamp to avoid duplicates)
echo ""
echo "✅ Test 2: User Registration"
TIMESTAMP=$(date +%s)
TEST_EMAIL="test${TIMESTAMP}@example.com"
REGISTER_RESPONSE=$(curl -s -X POST https://resume-builder-xw2z.onrender.com/api/users/register \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"Test User\",\"email\":\"${TEST_EMAIL}\",\"password\":\"test123\"}")
echo "Response: $REGISTER_RESPONSE"

# Extract token from registration response
TOKEN=$(echo $REGISTER_RESPONSE | grep -o '"token":"[^"]*' | cut -d'"' -f4)

if [ ! -z "$TOKEN" ]; then
  echo "✅ Token received: ${TOKEN:0:20}..."
  
  # Test 3: Get User Data with Token
  echo ""
  echo "✅ Test 3: Get User Data (Authenticated)"
  USER_DATA=$(curl -s -X GET https://resume-builder-xw2z.onrender.com/api/users/data \
    -H "Authorization: Bearer $TOKEN")
  echo "Response: $USER_DATA"
  
  # Test 4: Get User Resumes
  echo ""
  echo "✅ Test 4: Get User Resumes (Authenticated)"
  RESUMES=$(curl -s -X GET https://resume-builder-xw2z.onrender.com/api/users/resumes \
    -H "Authorization: Bearer $TOKEN")
  echo "Response: $RESUMES"
else
  echo "❌ Registration failed - no token received"
fi

# Test 5: Login with Same User
echo ""
echo "✅ Test 5: User Login"
LOGIN_RESPONSE=$(curl -s -X POST https://resume-builder-xw2z.onrender.com/api/users/login \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"${TEST_EMAIL}\",\"password\":\"test123\"}")
echo "Response: $LOGIN_RESPONSE"

# Test 6: Invalid Login
echo ""
echo "✅ Test 6: Invalid Login (Error Handling)"
INVALID_LOGIN=$(curl -s -X POST https://resume-builder-xw2z.onrender.com/api/users/login \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"invalid@test.com\",\"password\":\"wrongpass\"}")
echo "Response: $INVALID_LOGIN"

# Test 7: Access Protected Route Without Token
echo ""
echo "✅ Test 7: Unauthorized Access (No Token)"
UNAUTHORIZED=$(curl -s -X GET https://resume-builder-xw2z.onrender.com/api/users/data)
echo "Response: $UNAUTHORIZED"

echo ""
echo "=================================================="
echo "✅ All Authentication Tests Completed!"
echo "Check above for any errors. All responses should be valid JSON."
