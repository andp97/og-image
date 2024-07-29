import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
    runtime: 'edge',
};

export default function (request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);

        // ?title=<title>
        const hasTitle = searchParams.has('title');
        const title = hasTitle
            ? searchParams.get('title')?.slice(0, 100)
            : 'Andrea Pavone';

        const hasPayoff = searchParams.has('payoff');
        const payoff = hasPayoff
            ? searchParams.get('payoff')?.slice(0, 100)
            : 'Full-Stack Developer';

        return new ImageResponse(
            (
                <div
                    style={{
                        paddingLeft: '60px',
                        paddingRight: '60px',
                        paddingTop: '80px',
                        paddingBottom: '80px',
                        display: 'flex',
                        color: 'black',
                        background: '#fcfcfc',
                        borderRadius: '15px',
                        width: '100%',
                        height: '100%',
                        flexDirection: 'column',
                        textAlign: 'start',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                    }}
                >
                    <svg
                        style={{
                            height: '10%',
                            width: '10%'
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="1.5"
                        clipRule="evenodd"
                        viewBox="0 0 10880 6544"
                    >
                        <g transform="translate(-17851 -513)">
                            <g transform="translate(10929.3 487.809)">
                                <path
                                    fill="none"
                                    d="M6921.69 25.191H17800.79V6568.331H6921.69z"
                                ></path>
                                <path
                                    fill="#19140A"
                                    stroke="#19140A"
                                    strokeWidth="0.36"
                                    d="M3841.38 253.042c0-140.058-113.72-253.768-253.77-253.768H255.945C115.887-.726 2.177 112.984 2.177 253.042V1921.05c0 140.06 113.71 253.77 253.768 253.77H3587.61c140.05 0 253.77-113.71 253.77-253.77V253.042z"
                                    transform="translate(7046.67 286.529) scale(2.76918)"
                                ></path>
                                <path
                                    fill="#A72920"
                                    fillRule="nonzero"
                                    d="M.034 0c-.01 0-.013-.005-.01-.014l.257-.677C.283-.697.288-.7.295-.7h.116c.01 0 .013.005.01.014l-.257.677C.162-.003.157 0 .15 0H.034z"
                                    transform="translate(7133.3 405.171) scale(2.6774) translate(224.401 1533.22) scale(1.46607) scale(883.248)"
                                ></path>
                                <path
                                    fill="#A72920"
                                    fillRule="nonzero"
                                    d="M.034 0c-.01 0-.013-.005-.01-.014l.257-.677C.283-.697.288-.7.295-.7h.116c.01 0 .013.005.01.014l-.257.677C.162-.003.157 0 .15 0H.034z"
                                    transform="translate(7133.3 405.171) scale(2.6774) translate(224.401 1533.22) scale(1.46607) translate(281.756) scale(883.248)"
                                ></path>
                                <g>
                                    <path
                                        fill="#fff"
                                        fillRule="nonzero"
                                        d="M.506 0C.499 0 .495-.003.493-.01l-.03-.098C.462-.111.46-.112.458-.112H.212c-.002 0-.004.001-.005.004L.178-.01C.176-.003.172 0 .165 0H.038C.034 0 .031-.001.029-.004.027-.006.027-.009.028-.014L.244-.69C.246-.697.25-.7.257-.7h.157c.007 0 .011.003.013.01l.216.676.001.005C.644-.003.64 0 .633 0H.506zM.243-.227c-.001.004.001.006.004.006h.176c.004 0 .005-.002.004-.006l-.09-.297-.003-.004a.014.014 0 00-.003.004l-.088.297z"
                                        transform="translate(7133.3 405.171) scale(2.6774) translate(709.402 -313.758) scale(1.46727) translate(329.278 1258.78) scale(882.523)"
                                    ></path>
                                    <path
                                        fill="#fff"
                                        fillRule="nonzero"
                                        d="M.463-.688c0-.003.001-.006.004-.009A.011.011 0 01.475-.7h.117l.009.003a.016.016 0 01.003.009v.676a.011.011 0 01-.003.008A.012.012 0 01.592 0H.479a.015.015 0 01-.014-.008L.206-.436.202-.439C.201-.438.2-.437.2-.434l.002.422a.011.011 0 01-.003.008A.012.012 0 01.19 0H.073a.01.01 0 01-.008-.004.01.01 0 01-.004-.008v-.676c0-.003.001-.006.004-.009A.011.011 0 01.073-.7h.113c.007 0 .011.003.014.008l.258.426c.001.002.003.003.004.002.001 0 .002-.001.002-.004l-.001-.42z"
                                        transform="translate(7133.3 405.171) scale(2.6774) translate(709.402 -313.758) scale(1.46727) translate(921.451 1258.78) scale(882.523)"
                                    ></path>
                                    <path
                                        fill="#fff"
                                        fillRule="nonzero"
                                        d="M.073 0a.01.01 0 01-.008-.004.01.01 0 01-.004-.008v-.676c0-.003.001-.006.004-.009A.011.011 0 01.073-.7h.25a.32.32 0 01.132.026.197.197 0 01.118.186v.276a.197.197 0 01-.118.185A.305.305 0 01.323 0h-.25zm.129-.126c0 .003.002.005.005.005h.121c.031 0 .056-.01.075-.031a.123.123 0 00.029-.083v-.23a.118.118 0 00-.028-.083.099.099 0 00-.077-.031h-.12c-.003 0-.005.002-.005.005v.448z"
                                        transform="translate(7133.3 405.171) scale(2.6774) translate(709.402 -313.758) scale(1.46727) translate(1503.03 1258.78) scale(882.523)"
                                    ></path>
                                </g>
                            </g>
                        </g>
                    </svg>

                    <h1 style={{
                        fontSize: 120,
                        fontWeight: "bolder",
                    }}>
                        {title}
                    </h1>

                    <h2 style={{
                        fontSize: 90,
                        fontWeight: "bold",
                        color: '#2e2e2e'
                    }}>
                        {payoff}
                    </h2>



                    <div style={{
                        fontSize: 40,
                        display: 'flex',
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <p>Made with ❤️ by Andrea Pavone</p>
                        <p>andreapavone.com</p>
                    </div>

                </div>
            ),
            {
                width: 1600,
                height: 900,
                // Supported options: 'twemoji', 'blobmoji', 'noto', 'openmoji', 'fluent' and 'fluentFlat'
                // Default to 'twemoji'
                emoji: 'fluent',
            },
        );

    } catch (e: any) {
        console.log(`${e.message}`);
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }


}