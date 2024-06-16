// Mobile menu open
const body = document.querySelector('body');
function openMobileMenuSlider(){
    body.classList.add('menu-open');
}

// Mobile menu open
function closeMobileMenuSlider(){
  if(body.classList.contains('menu-open')){
    body.classList.remove('menu-open');
  }
}

// Focus next field
let fields = document.querySelectorAll(".verification-otp input");

for (let i = 0; i < fields.length; i++) {
  fields[i].addEventListener("input", function() {
    if (this.value.length === 1) {
      if (fields[i + 1]) {
        fields[i + 1].focus();
      }
    }
  });
}

let currentField;

fields.forEach(function(field) {
  field.addEventListener("focus", function() {
    currentField = field;
  });
});

document.addEventListener("keydown", function(event) {
  if (event.key === "Backspace") {
    if (currentField && currentField.value.length === 0) {
      let previousField = fields[Array.from(fields).indexOf(currentField) - 1];
      if (previousField) {
        previousField.value = "";
        previousField.focus();
      }
    } else if (currentField) {
      currentField.value = currentField.value.slice(0, -1);
    }
  }
});

// Payment Method check
function checkPaymentMethod(){
  const selctPaymentMethod = document.getElementById('selctPaymentMethod').value;
  if(selctPaymentMethod === 'pay_with_crypto'){
    $('#payWithCryptoModal').modal("show");
  }
};

// All Chart Customize Here
if(typeof Chart != "undefined"){

    if(typeof statistics_chart != "undefined"){
  // Daily Statistics Chart Style Here
  function getCategoryPercentage() {
    if (window.innerWidth <= 480) {
        return 0.8;
    }else if(window.innerWidth <= 575){
        return 0.7;
    }else if(window.innerWidth <= 767){
        return 0.6;
    }else if(window.innerWidth <= 1200){
        return 0.5;
    }else {
        return 0.4;
    }
  }

  function chartHeadingFontSize() {
    if (window.innerWidth <= 767) {
        return 20;
    }else {
        return 24;
    }
  }

  function graphMinValue(){
    return Number(graphLabelMinValue);
  }
  
  function graphMaxValue(){
    return Number(graphLabelMaxValue);
  }

  const tooltipTitle = (tooltipItems) => {
    return false;
  };

  new Chart(statistics_chart, {
      type: 'bar',
      data: daily_statistics_chart_data,  
      options: {
          layout: {
              padding: {
              left: 20,
              right: 25,
              top: 25,
              bottom: 25
              }
          },
          maintainAspectRatio: false,
          aspectRatio: 1 | 1,
          categoryPercentage: getCategoryPercentage(),
          barPercentage: 0.6,
          maxBarThickness: 10,
          borderSkipped: false,
          borderRadius: 10,
          plugins: {
              title: {
                  display: true,
                  text: 'Daily statistics',   //This is main title text
                  align: 'start',
                  color: '#020202',
                  padding: {
                      bottom: 35
                  },
                  font: {
                      size: chartHeadingFontSize(),
                      family: 'Gilroy',
                      weight: 600,
                      lineHeight: 1
                  }
              },
              legend: {
                  display: false
              },
              tooltip: { 
                  xAlign: 'center',
                  yAlign: 'bottom',
                  cornerRadius: 13,
                  padding: {
                      left: 12,
                      right: 12
                  },
                  backgroundColor: '#D9D9D9',
                  displayColors: false,
                  bodyColor: '#6F6F6F',
                  bodyAlign: 'center',
                  bodyFont: {
                      size: 14,
                      family: 'Gilroy',
                      weight: 500,
                      lineHeight: '26px'
                  },
                  callbacks: {
                      title : tooltipTitle,
                      label: function(context) {
                          return context.dataset.label;
                      }
                  }
              }
          },
          scales: {
              y: {
                  ticks: {
                      color: '#6F6F6F',
                      font:{
                          size: 14,
                          weight: 500,
                          family: 'Gilroy'
                      },
                      padding: 5,
                    //   stepSize: 50,
                  },
                  beginAtZero: true,
                  min: graphMinValue(),
                  max: graphMaxValue(),
                  grid: {
                      tickLength: 8,
                      drawBorder: false,
                      color: '#F1F1FA'
                  }
              },
              x: {
                  ticks: {
                      color: '#6F6F6F',
                      font:{
                          size: 14,
                          weight: 500,
                          family: 'Gilroy'
                      },
                      padding: 5
                  },
                  grid:{
                      display: false,
                      borderColor: '#F1F1FA'
                  }
              }
          }
      }
  });
  };

  if(typeof today_sms_doughnut_chart != "undefined"){
  // Today sms doughnut
  new Chart(today_sms_doughnut_chart, {
    type: 'doughnut',
    data: today_sms_doughnut_chart_data,
    options: {
        rotation: 90,
        cutout: 65,
        spacing: 2,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                xAlign: 'center',
                yAlign: 'bottom',
                padding: {
                    left: 12,
                    right: 12
                },
                backgroundColor: '#D9D9D9',
                bodyColor: '#6F6F6F',
                bodyAlign: 'center',
                bodyFont: {
                    size: 14,
                    family: 'Gilroy',
                    weight: 500,
                    lineHeight: '25px'
                }
            }
        }
      }
  });

  // week sms doughnut
  new Chart(week_sms_doughnut_chart, {
    type: 'doughnut',
    data: week_sms_doughnut_chart_data,
    options: {
        rotation: 90,
        cutout: 65,
        spacing: 2,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                xAlign: 'center',
                yAlign: 'bottom',
                padding: {
                    left: 12,
                    right: 12
                },
                backgroundColor: '#D9D9D9',
                bodyColor: '#6F6F6F',
                bodyAlign: 'center',
                bodyFont: {
                    size: 14,
                    family: 'Gilroy',
                    weight: 500,
                    lineHeight: '25px'
                }
            }
        }
      }
  });

  // month sms doughnut
  new Chart(month_sms_doughnut_chart, {
    type: 'doughnut',
    data: month_sms_doughnut_chart_data,
    options: {
        rotation: 90,
        cutout: 65,
        spacing: 2,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                xAlign: 'center',
                yAlign: 'bottom',
                padding: {
                    left: 12,
                    right: 12
                },
                backgroundColor: '#D9D9D9',
                bodyColor: '#6F6F6F',
                bodyAlign: 'center',
                bodyFont: {
                    size: 14,
                    family: 'Gilroy',
                    weight: 500,
                    lineHeight: '25px'
                }
            }
        }
      }
  });

  // year sms doughnut
  new Chart(year_sms_doughnut_chart, {
    type: 'doughnut',
    data: year_sms_doughnut_chart_data,
    options: {
        rotation: 90,
        cutout: 65,
        spacing: 2,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                xAlign: 'center',
                yAlign: 'bottom',
                padding: {
                    left: 12,
                    right: 12
                },
                backgroundColor: '#D9D9D9',
                bodyColor: '#6F6F6F',
                bodyAlign: 'center',
                bodyFont: {
                    size: 14,
                    family: 'Gilroy',
                    weight: 500,
                    lineHeight: '25px'
                }
            }
        }
      }
  });

  // all time sms doughnut
  new Chart(all_sms_doughnut_chart, {
    type: 'doughnut',
    data: all_sms_doughnut_chart_data,
    options: {
        rotation: 90,
        cutout: 65,
        spacing: 2,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                xAlign: 'center',
                yAlign: 'bottom',
                padding: {
                    left: 12,
                    right: 12
                },
                backgroundColor: '#D9D9D9',
                bodyColor: '#6F6F6F',
                bodyAlign: 'center',
                bodyFont: {
                    size: 14,
                    family: 'Gilroy',
                    weight: 500,
                    lineHeight: '25px'
                }
            }
        }
      }
  });
  };

  if(typeof today_response_doughnut_chart != "undefined"){
  // today response doughnut
  new Chart(today_response_doughnut_chart, {
    type: 'doughnut',
    data: today_response_doughnut_chart_data,
    options: {
        rotation: 90,
        cutout: 65,
        spacing: 2,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                xAlign: 'center',
                yAlign: 'bottom',
                padding: {
                    left: 12,
                    right: 12
                },
                backgroundColor: '#D9D9D9',
                bodyColor: '#6F6F6F',
                bodyAlign: 'center',
                bodyFont: {
                    size: 14,
                    family: 'Gilroy',
                    weight: 500,
                    lineHeight: '25px'
                }
            }
        }
      }
  });

  // week response doughnut
   new Chart(week_response_doughnut_chart, {
    type: 'doughnut',
    data: week_response_doughnut_chart_data,
    options: {
        rotation: 90,
        cutout: 65,
        spacing: 2,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                xAlign: 'center',
                yAlign: 'bottom',
                padding: {
                    left: 12,
                    right: 12
                },
                backgroundColor: '#D9D9D9',
                bodyColor: '#6F6F6F',
                bodyAlign: 'center',
                bodyFont: {
                    size: 14,
                    family: 'Gilroy',
                    weight: 500,
                    lineHeight: '25px'
                }
            }
        }
      }
  });

  // month response doughnut
   new Chart(month_response_doughnut_chart, {
    type: 'doughnut',
    data: month_response_doughnut_chart_data,
    options: {
        rotation: 90,
        cutout: 65,
        spacing: 2,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                xAlign: 'center',
                yAlign: 'bottom',
                padding: {
                    left: 12,
                    right: 12
                },
                backgroundColor: '#D9D9D9',
                bodyColor: '#6F6F6F',
                bodyAlign: 'center',
                bodyFont: {
                    size: 14,
                    family: 'Gilroy',
                    weight: 500,
                    lineHeight: '25px'
                }
            }
        }
      }
  });

  // year response doughnut
  new Chart(year_response_doughnut_chart, {
    type: 'doughnut',
    data: year_response_doughnut_chart_data,
    options: {
        rotation: 90,
        cutout: 65,
        spacing: 2,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                xAlign: 'center',
                yAlign: 'bottom',
                padding: {
                    left: 12,
                    right: 12
                },
                backgroundColor: '#D9D9D9',
                bodyColor: '#6F6F6F',
                bodyAlign: 'center',
                bodyFont: {
                    size: 14,
                    family: 'Gilroy',
                    weight: 500,
                    lineHeight: '25px'
                }
            }
        }
      }
  });

  // all time response doughnut
  new Chart(all_response_doughnut_chart, {
    type: 'doughnut',
    data: all_response_doughnut_chart_data,
    options: {
        rotation: 90,
        cutout: 65,
        spacing: 2,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                xAlign: 'center',
                yAlign: 'bottom',
                padding: {
                    left: 12,
                    right: 12
                },
                backgroundColor: '#D9D9D9',
                bodyColor: '#6F6F6F',
                bodyAlign: 'center',
                bodyFont: {
                    size: 14,
                    family: 'Gilroy',
                    weight: 500,
                    lineHeight: '25px'
                }
            }
        }
      }
  });
  };

  if(typeof click_statistics_doughnut_chart != "undefined"){
  // click statistics doughnut
  new Chart(click_statistics_doughnut_chart, {
    type: 'doughnut',
    data: click_statistics_doughnut_chart_data,
    options: {
        rotation: 90,
        cutout: 65,
        spacing: 2,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                xAlign: 'center',
                yAlign: 'bottom',
                padding: {
                    left: 12,
                    right: 12
                },
                backgroundColor: '#D9D9D9',
                bodyColor: '#6F6F6F',
                bodyAlign: 'center',
                bodyFont: {
                    size: 14,
                    family: 'Gilroy',
                    weight: 500,
                    lineHeight: '25px'
                }
            }
        }
      }
  });
  };
  
};
