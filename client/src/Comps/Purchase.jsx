import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
const Purchase = ({price}) =>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_3YanwBQg48opSt4OXC3eIn1r00eXwto0cI'
    const onToken = token => {
        console.log(token);
        alert('Payment successful')
    }
    
    return <StripeCheckout
            
                label='Pay Now'
                name='GuitarShop'
                billingAddress
                shippingAddress
                description={`Your total is $${price}`}
                amount={priceForStripe}
                panelLabel='Pay Now'
                token={onToken}
                stripeKey={publishableKey}
            />
}

export default Purchase