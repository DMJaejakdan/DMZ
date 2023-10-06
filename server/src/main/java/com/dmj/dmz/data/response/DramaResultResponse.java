package com.dmj.dmz.data.response;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.*;

import java.util.List;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class DramaResultResponse extends MovieDramaResultResponse{
    String firstAirDate;
    String name;
    List<String> originCountry;
    String originalName;
}
