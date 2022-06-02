/// Calculation process
$(document).ready(function () {
    
    // remove active class from all list
    $('.sl-option li').removeClass('active');

    $('.sl-option li').click(function () {

        $('.sl-option li').removeClass('active');
        $(this).addClass('active');
        
        if($(this).hasClass('cus')) {

            $('.cus-field').removeClass('disable');
            $('.cus-field-sl').children('.cus-cur').removeAttr('disabled');

            $('#calc').click(function () {
                calculateCustomFieldValue();
            });

            /// Calculation for Custom Convert
            
            var cc = document.getElementById('cusSelect');

            // Create option for custom select
            function createOption(x, y) {
                var opt = document.createElement('option');
                var curName = document.createTextNode(x);
                opt.setAttribute('value', toNum(y));
                opt.appendChild(curName);
                cc.appendChild(opt);
            }

            // Remove comma and change to Number format 
            function toNum(x) {
                return Number(x.replace(',', ''));
            }

            // Loop currencies rate from data object
            for (x in data.rates) {
                createOption(x, data.rates[x]);
            }

            // Calculate the Custom Field value
            function calculateCustomFieldValue() {

                var ammount = document.getElementById('input');
                var cusSelect = document.getElementById('cusSelect');

                var x = ammount.value;
                var y = cusSelect.value;
                var mmk = 1; // Currently only for mmk

                //calculate the final value
                var firstValue = x * y;
                var finalValue = firstValue / mmk;

                $('#result').html(finalValue.toFixed(2));

                // reset the field values
                ammount.value = '';
                cusSelect.value = '';
            };

        }else {
            $('.cus-field').addClass('disable');
            $('.cus-field-sl').children('.cus-cur').attr('disabled', true);


        }


        

    });

    



});


