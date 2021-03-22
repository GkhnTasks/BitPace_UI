package com.bitpace.utilities;

import io.restassured.http.ContentType;
import io.restassured.response.Response;

import static io.restassured.RestAssured.given;

public class ApiUtils {
    public static String generateToken(){
        String passwordBody="{\n" +
                "    \"merchant_code\":\"20316112227\",\n" +
                "    \"password\": \"oT3u8h\"\n" +
                "}";
        Response response = given().log().all().accept(ContentType.JSON)
                .contentType(ContentType.JSON)
                .and().body(passwordBody)
                .when().post(ConfigurationReader.get("apiUrl") + "/api/v1/auth/token");
        response.prettyPrint();

        String token = response.path("data.token");

        String finalToken = "Bearer "+ token;

       // System.out.println("finalToken = " + finalToken);

        return finalToken;
    }
}

