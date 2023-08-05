import { FrolicRequest, FrolicResponse } from "./interface";

export const getData = async (apiUrl: string, request: FrolicRequest): Promise<FrolicResponse> => {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        });

        if (response.ok) {
            return await response.json() as FrolicResponse;
        } else {
            throw new Error(`API request failed with status: ${response.status}`);
        }
    } catch (error: any) {
        throw new Error(`An error occurred: ${error.message}`);
    }
}