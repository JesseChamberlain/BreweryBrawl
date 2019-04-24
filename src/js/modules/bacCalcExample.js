(function() {
    var bacPage = document.querySelector('main.bac');
    var maleBtn = document.querySelector('.bac-input--male');
    var femaleBtn = document.querySelector('.bac-input--female');
    var beer = document.querySelector('.bac-input__alcohol--beer');
    var liquor = document.querySelector('.bac-input__alcohol--liquor');
    var wine = document.querySelector('.bac-input__alcohol--wine');
    var bodyWeight = document.querySelector(
        '.bac-input-container__input--body-weight'
    );
    var hours = document.querySelector('.bac-input-container__input--hours');
    var minutes = document.querySelector(
        '.bac-input-container__input--minutes'
    );
    var result = document.querySelector('.bac-results__percentage');
    var hoursUntilSoberText = document.querySelector('.bac-results__orange');
    var desciptionText = document.querySelector(
        '.bac-results__description-detail'
    );
    var toggle = document.querySelector('.bac-results__toggle');
    var resultsDiv = document.querySelector('.bac-results');
    var footer = document.querySelector('footer');
    var buttons = [maleBtn, femaleBtn];
    var inputs = [beer, liquor, wine, bodyWeight, hours, minutes];
    var state = {
        gender: '',
        bodyWeight: 0,
        beer: 0,
        wine: 0,
        liquor: 0,
        duration: {
            hours: 0,
            minutes: 0
        },
        bac: 0,
        hoursUntilSober: '',
        text: ''
    };
    var bacFormula = function bacFormula(currentState) {
        var totalDrink =
            currentState.beer + currentState.wine + currentState.liquor;
        var number1 = currentState.gender === 'male' ? 0.58 : 0.49;
        var number2 = currentState.gender === 'male' ? 0.015 : 0.017;
        var bac =
            (0.806 * (totalDrink * 1.4) * 1.2) /
                (number1 * (currentState.bodyWeight / 2.205)) -
            number2 *
                ((currentState.duration.hours * 60 +
                    currentState.duration.minutes) /
                    60);
        bac = Math.max(0, Math.round(bac * 100) / 100);
        currentState.bac = bac;
    };
    var updateBacState = (function() {
        var _ref = _asyncToGenerator(
            __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(
                function _callee(className) {
                    var inputValue =
                        arguments.length > 1 && arguments[1] !== undefined
                            ? arguments[1]
                            : 0;
                    var isValid;
                    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(
                        function _callee$(_context) {
                            while (1) {
                                switch ((_context.prev = _context.next)) {
                                    case 0:
                                        if (!inputValue) {
                                            inputValue = 0;
                                        }
                                        _context.t0 = className;
                                        _context.next =
                                            _context.t0 === 'bac-input--male'
                                                ? 4
                                                : _context.t0 ===
                                                  'bac-input--female'
                                                ? 6
                                                : _context.t0 ===
                                                  'bac-input__alcohol--beer'
                                                ? 8
                                                : _context.t0 ===
                                                  'bac-input__alcohol--liquor'
                                                ? 10
                                                : _context.t0 ===
                                                  'bac-input__alcohol--wine'
                                                ? 12
                                                : _context.t0 ===
                                                  'bac-input-container__input--body-weight'
                                                ? 14
                                                : _context.t0 ===
                                                  'bac-input-container__input--hours'
                                                ? 16
                                                : _context.t0 ===
                                                  'bac-input-container__input--minutes'
                                                ? 18
                                                : 19;
                                        break;
                                    case 4:
                                        state.gender = 'male';
                                        return _context.abrupt('break', 19);
                                    case 6:
                                        state.gender = 'female';
                                        return _context.abrupt('break', 19);
                                    case 8:
                                        state.beer = parseInt(inputValue);
                                        return _context.abrupt('break', 19);
                                    case 10:
                                        state.liquor = parseInt(inputValue);
                                        return _context.abrupt('break', 19);
                                    case 12:
                                        state.wine = parseInt(inputValue);
                                        return _context.abrupt('break', 19);
                                    case 14:
                                        state.bodyWeight = parseInt(inputValue);
                                        return _context.abrupt('break', 19);
                                    case 16:
                                        state.duration.hours = parseInt(
                                            inputValue
                                        );
                                        return _context.abrupt('break', 19);
                                    case 18:
                                        state.duration.minutes = parseInt(
                                            inputValue
                                        );
                                    case 19:
                                        _context.next = 21;
                                        return validate();
                                    case 21:
                                        isValid = _context.sent;
                                        if (isValid) {
                                            _context.next = 24;
                                            break;
                                        }
                                        return _context.abrupt('return');
                                    case 24:
                                        _context.next = 26;
                                        return bacFormula(state);
                                    case 26:
                                        _context.next = 28;
                                        return updateBac(state.bac);
                                    case 28:
                                        _context.next = 30;
                                        return updateHoursUntilSober(state.bac);
                                    case 30:
                                        _context.next = 32;
                                        return updateResultsText(state.bac);
                                    case 32:
                                    case 'end':
                                        return _context.stop();
                                }
                            }
                        },
                        _callee,
                        this
                    );
                }
            )
        );
        return function updateBacState(_x2) {
            return _ref.apply(this, arguments);
        };
    })();
    var validate = function validate() {
        if (state.beer + state.liquor + state.wine === 0) return false;
        if (!(state.duration.hours || state.duration.minutes)) return false;
        if (!state.gender) return false;
        if (!state.bodyWeight) return false;
        else return true;
    };
    var updateBac = function updateBac(bac) {
        if (!bac && bac !== 0) {
            result.innerHTML = '? %';
        } else {
            result.innerHTML = bac + ' %';
        }
    };
    var updateHoursUntilSober = function updateHoursUntilSober(bac) {
        if (!bac && bac !== 0) {
            hoursUntilSoberText.innerHTML = '? Hours';
        } else {
            var hoursUntilSober = Math.round(bac / 0.015);
            var _hours = hoursUntilSober === 1 ? 'hour' : 'hours';
            state.hoursUntilSober = hoursUntilSober + ' ' + _hours;
            hoursUntilSoberText.innerHTML = state.hoursUntilSober;
        }
    };
    var updateResultsText = function updateResultsText(bac) {
        if (!bac && bac !== 0) {
            state.text =
                '<span style="color: red;">*Please fill out all of the calculator fields to view your results</span>';
        } else if (bac < 0.01) {
            state.text = "You're sober and in control!";
        } else if (bac < 0.03) {
            state.text = 'You may feel relaxed with some mood changes.';
        } else if (bac < 0.05) {
            state.text =
                'You might be experiencing a minor reduction in muscle control and coordination, with some speech, memory, and attention impairment. Your emotions and behaviors may be exaggerated and you might start to feel drowsy.';
        } else if (bac < 0.08) {
            state.text =
                'You may feel more confident, but you probably have reduced vision and hearing. Speech, memory, attention, and coordination impairments are probably more noticeable at this point, and you may have difficulty concentrating. It is illegal (not to mention extremely unsafe) for you to operate a vehicle at a BAC of 0.08 or above, so if you need to get somewhere be sure to find a sober ride to get you safely where you want to go.';
        } else if (bac < 0.1) {
            state.text =
                'At this point, your reaction time and depth perception are noticeably impaired. You are probably experiencing difficulties with self-control as well as moderate memory problems. It is illegal (not to mention extremely unsafe) for you to operate a vehicle at a BAC of 0.08 or above, so if you need to get somewhere be sure to find a sober ride to get you safely where you want to go.';
        } else if (bac < 0.15) {
            state.text =
                'You are probably slurring your words and may have blurred vision. You may have obvious problems with body control and balance, and you may be experiencing impairments in your mental capacity. It is illegal (not to mention extremely unsafe) for you to operate a vehicle at a BAC of 0.08 or above, so if you need to get somewhere be sure to find a sober ride to get you safely where you want to go.';
        } else if (bac < 0.2) {
            state.text =
                "You may be feeling nauseous at this point, possibly even vomiting. Your reflexes can be slow, and you're likely staggering and slurring your words. You're probably going to experience impaired sexual functioning at this BAC, and your mental capacities may be clearly reduced. It is illegal (not to mention extremely unsafe) for you to operate a vehicle at a BAC of 0.08 or above, so if you need to get somewhere be sure to find a sober ride to get you safely where you want to go.";
        } else if (bac < 0.3) {
            state.text =
                "At this point, you would be very obviously intoxicated. You probably have almost a complete loss of motor control, and there's a good chance you're vomiting or passing out. You're likely having serious memory impairments, and you should probably seek professional medical care. It is illegal (not to mention extremely unsafe) for you to operate a vehicle at a BAC of 0.08 or above, so if you need to get somewhere be sure to find a sober ride to get you safely where you want to go.";
        } else {
            state.text =
                "You're probably not reading this because there's a good chance that you're unconscious. This BAC indicates alcohol poisoning, and there is a very serious risk of long-term damage or death. If you or someone you're with may be at this BAC level, you should seek immediate medical assistance.";
        }
        desciptionText.innerHTML = state.text;
        if (window.innerWidth <= 768) {
            resultsDiv.classList.add('visible');
            footer.classList.add('pad-bottom-170');
        }
    };
    buttons.forEach(function(input) {
        var lastClass = input.classList.length;
        var className = input.classList[lastClass - 1];
        input.addEventListener('click', function() {
            buttons.forEach(function(btn) {
                return btn.classList.remove('bac-input--active');
            });
            this.classList.toggle('bac-input--active');
            updateBacState(className);
        });
    });
    inputs.forEach(function(input) {
        var lastClass = input.classList.length;
        var className = input.classList[lastClass - 1];
        input.addEventListener('keyup', function() {
            var inputValue = input.value;
            updateBacState(className, inputValue);
        });
    });
    toggle.addEventListener('click', function() {
        resultsDiv.classList.toggle('expanded');
        this.innerHTML =
            this.innerHTML.trim() === 'What Does This Mean?'
                ? 'Read Less'
                : 'What Does This Mean?';
    });
    [bodyWeight, hours, minutes].forEach(function(input) {
        input.addEventListener('focus', function() {
            this.parentNode.classList.add('focus');
        });
        input.addEventListener('blur', function() {
            this.parentNode.classList.remove('focus');
        });
    });
})();
