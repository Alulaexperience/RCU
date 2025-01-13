# Example endpoint
endpoint_url = "https://www.RCU.gov.sa/data/submit"
 
# Simulated complex configuration data
config_data = {
    "transaction_id": "abc123xyz456",
    "details": {
        "config": "eyJleHBpcnkiOiIyMDI1LTA1LTAxIiwgImtleV9maWxlIjoiU2VjdXJlS2V5Q29udGVudCJ9",  # Base64 encoded JSON {"expiry":"2025-05-01", "key_file":"SecureKeyContent"}
        "settings": {
            "mode": "test",
            "level": 5
        }
    }
}
 
# Send POST request
response = requests.post(endpoint_url, json=config_data)
 
# Print response (for testing purposes only)
print("Status Code:", response.status_code)
print("Response Body:", response.text)
