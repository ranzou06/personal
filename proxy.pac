function FindProxyForURL(url, host) {
    PROXY = "SOCKS5 192.168.2.116:1080"

    // Apple.com via proxy
    if (shExpMatch(host,"*sicoob*")  ) {
        return PROXY;
    }
    
     if (shExpMatch(host,"*sisbr.coop*")  ) {
        return PROXY;
    }

    if (shExpMatch(host,"*homologacao*")  ) {
        return PROXY;
    }
    
    if (shExpMatch(host,"*wasd.*")  ) {
        return PROXY;
    }
    
     if (shExpMatch(host,"*wash.*")  ) {
        return PROXY;
    }
    
     if (shExpMatch(host,"*wasp.*")  ) {
        return PROXY;
    }
    
     if (shExpMatch(host,"*jbsp.*")  ) {
        return PROXY;
    }
     if (shExpMatch(host,"*.sisbr.*")  ) {
        return PROXY;
    }
    
     if (shExpMatch(host,"*.coop.br*")  ) {
        return PROXY;
    }
    
    if (shExpMatch(host,"*db2t*")  ) {
        return PROXY;
    }
    
     if (shExpMatch(host,"*db2d*")  ) {
        return PROXY;
    }
    
     if (shExpMatch(host,"*db2h*")  ) {
        return PROXY;
    }
    
    if (shExpMatch(host,"*db2p*")  ) {
        return PROXY;
    }
    
     if (shExpMatch(host,"*sqlh*")  ) {
        return PROXY;
    }
    
    if (shExpMatch(host,"*sqlt*")  ) {
        return PROXY;
    }
    
    if (shExpMatch(host,"*sqlhd*")  ) {
        return PROXY;
    }
    
    if (shExpMatch(host,"*sqlp*")  ) {
        return PROXY;
    }
    
    
    // Everything else directly!
    return "DIRECT";
}
