/**
 * Abort the request with an error code.
 *
 * <example>
    :addValue.js
    it('should demonstrate the addValue command', () => {
        const mock = await browser.network.mock('/todos')
        mock.abort('Failed')
    })
 * </example>
 *
 * @alias mock.abort
 * @param {ErrorCode} errorCode  error code of the response, can be one of: `Failed`, `Aborted`, `TimedOut`, `AccessDenied`, `ConnectionClosed`, `ConnectionReset`, `ConnectionRefused`, `ConnectionAborted`, `ConnectionFailed`, `NameNotResolved`, `InternetDisconnected`, `AddressUnreachable`, `BlockedByClient`, `BlockedByResponse`
 */
// actual implementation is located in packages/webdriverio/src/utils/interception
