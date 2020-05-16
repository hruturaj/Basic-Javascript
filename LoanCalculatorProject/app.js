// Listen for submit
document.querySelector('#loan-form').addEventListener('submit', function(e) {
    // Hide results
    document.querySelector('#results').style.display = 'none'

    // Show loader
    document.querySelector('#loading').style.display = 'block'

    setTimeout(calculateResults, 2000)

    e.preventDefault()
})

// Calculate results
function calculateResults(e) {
    console.log('Calculating .... ')

    // UI vars
    const amount = document.querySelector('#amount')
    const interest = document.querySelector('#interest')
    const years = document.querySelector('#years')
    const monthlyPayment = document.querySelector('#monthly-payment')
    const totalPayment = document.querySelector('#total-payment')
    const totalInterest = document.querySelector('#total-interest')

    const principle = parseFloat(amount.value)
    const calculatedInterest = parseFloat(interest.value) / 100 / 12
    const calculatedPayment = parseFloat(years.value) * 12

    // Compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayment)
    const monthly = (principle * x * calculatedInterest) / (x - 1)

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2)
        totalPayment.value = (monthly * calculatedPayment).toFixed(2)
        totalInterest.value = ((monthly * calculatedPayment) - principle).toFixed(2)

        // Show results
        document.querySelector('#results').style.display = 'block'

        // Hide loading
        document.querySelector('#loading').style.display = 'none'
    } else {
        showError('Please check your numbers')
    }

    e.preventDefault()
}

// Show error
function showError(error) {
    // Show results
    document.querySelector('#results').style.display = 'none'

    // Hide loading
    document.querySelector('#loading').style.display = 'none'

    // Create a div
    const errorDiv = document.createElement('div')

    // Get elements
    const card = document.querySelector('.card')
    const heading = document.querySelector('.heading')

    // Add class
    errorDiv.className = 'alert alert-danger'

    // Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error))

    // Insert error above heading
    card.insertBefore(errorDiv, heading)

    // Clear Error after 2s
    setTimeout(function() {
        document.querySelector('.alert').remove()
    }, 2000)
}