function FindProxyForURL(url, host) {
    PROXY = "SOCKS5 192.168.2.116:1080"

    // Apple.com via proxy
    if (shExpMatch(host,"*sicoob*") ) {
        return PROXY;
    }
    // Everything else directly!
    return "DIRECT";
}