import React from 'react'
import { CiSearch } from "react-icons/ci";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

const Navbar = () => {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                {/* brand logo */}

                <div className='brand ms-5'>
                    <img src="/images/shop-icon.png" alt="shop-icon" className='logo' />
                    <a className="navbar-brand" href="/">ECOM SHOP</a>
                </div>
                {/* Search Bar  */}
                <div className='search'>
                    <CiSearch className='search-icon' />
                    <input type="text" placeholder='Search your items...' className='input' />
                </div>
                {/* right items */}

                <div className='d-flex justify-content-between align-items-center me-5'>
                    <button className='button'> Login </button>
                    <IconButton aria-label="cart" sx={{fontSize: '30px'}}>
                        <StyledBadge badgeContent={4} color="primary">
                            <ShoppingCartIcon />
                        </StyledBadge>
                    </IconButton>
                </div>

            </div>
        </nav>

    )
}

export default Navbar