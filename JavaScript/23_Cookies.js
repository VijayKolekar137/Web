// Cookies are a plain text data record of 5 variable-length fields:

// 1. Expires: The date the cookie will expire. If this is blank, the cookie will expire when the visitor quits the browser.

// 2. Domain : The domain name of your site . 

// 3. Path : The path to the directory or web page thath set the cookie. This may be blank if you want to retrieve the cookie from any directory or page.

// 4. Secure :  If this field contains the word "secure", then the cookie may only be retrieved with a secure server . If this field is blank, no such restriction exits. 

// 5. Name=Value : Cookies are set and retrieved in the formof key-value pairs. 

function WriteCookie()
{
    if(document.myform.customer.value == "")
    {
        alert ("Enter Some Value!");
        return;
    }

    cookievalue = escape(document.myform.customer.value) + ";";
    document.cookie = "name = " + cookievalue;
    document.write("Setting Cookies: " + "name = " + cookievalue);
}