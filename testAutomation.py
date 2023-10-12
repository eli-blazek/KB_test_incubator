import requests

status_codes = [100, 200, 201, 302, 400, 404, 418, 500, 502, 1046, "086", "nonsensical value", None]
for status_code in status_codes:
    tested_url = f"https://postman-echo.com/status/{status_code}"
    response = requests.get(tested_url)
    response_jsoned = response.json()
    if "message" in response_jsoned is not None:
        print(response_jsoned)
    else:
        print("Call successful" + str(response_jsoned))

