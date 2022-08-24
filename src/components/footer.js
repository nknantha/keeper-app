import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
    return (
        <footer>
            <span>
                Made with 💙 by {'|\\|< | '}
                <a href='https://github.com/nknantha' >
                    <GitHubIcon
                        sx={{
                            color: 'white',
                            verticalAlign: '-0.45rem',
                            my: '1px'
                        }} />
                </a>
            </span>
        </footer>
    );
}

export default Footer;