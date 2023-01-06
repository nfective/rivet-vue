/*
    These methods utility methods eliminate the need to write
    :current="uri === '/page/...' ? 'page' : ''"
    The reason these methods aren't included in the rvt-header-menu-link or
    the rvt-sidenav-link components is because sometimes the developer
    might want a partial uri match or a full uri match, therefore this
    layer of abstraction allows the developer to choose which one they want.
*/

const useInclude = (uri) => location.pathname.toLowerCase().includes(uri.toLowerCase()) ? 'page' : ''

const useMatch = (uri) => uri.toLowerCase() === location.pathname.toLowerCase() ? 'page' : ''

export {
    useInclude,
    useMatch
}