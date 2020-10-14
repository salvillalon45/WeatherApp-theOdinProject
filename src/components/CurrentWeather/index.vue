<!--
-------------------------------------------------
CurrentWeather Component: index.vue
Desc: The component that uses the data received
from the API and displays
-------------------------------------------------
-->

<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="searchCityContainer">
                        <form class="cityForm" @submit.prevent="submitForm(cityName)">
                            <div class="form-group">
                                <label for="searchCity">Search the Name of a City</label>
                                <input type="text" class="form-control weatherInput" id="searchCity" placeholder="Calexico" v-model="cityName">
                            </div>

                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>

            <div v-if="responseAvailable === true">
                <div class="row">
                    <div class="col-md-12">
                        <div class="cityInfoContainer">
                            <h2>{{ currentWeatherData.name }}</h2>
                            <h3>{{ currentDay }}, {{ currentTime }}</h3>
                        </div>
                    </div>
                </div>

                <div class="row weatherDataContainer">
                    <div class="col-md-6">
                        <div class="weatherContainer">
                            <img v-bind:src="weatherIcon" alt="Weather Icon"/>
                            <h3>{{ weatherDescription }}</h3>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="weatherInfoContainer">
                            <p><b>Humidity:</b> {{ humidity }}%</p>
                            <p><b>Wind:</b> {{ wind }} mph</p>
                            <p><b>Fahrenheit: </b>{{ tempature[0] }}</p>
                            <p><b>Celsius: </b>{{ tempature[1] }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div v-else-if="currentWeatherData === 1">
                <div class="row">
                    <div class="col-md-12">
                        <div class="cityInfoContainer">
                            <h2>City Not Found</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./script.js"></script>

<style scoped src="./style.css"></style>
