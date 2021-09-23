package com.recipefinder.recipefinder.models.requests;

import com.recipefinder.recipefinder.models.PartOfTheDay;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;
@NoArgsConstructor
public class PlanningRequest {
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private Date date;
    private PartOfTheDay partOfTheDay;

    public PlanningRequest(Date date, PartOfTheDay partOfTheDay) {
        this.date = date;
        this.partOfTheDay = partOfTheDay;
    }

    public PartOfTheDay getPartOfTheDay() {
        return partOfTheDay;
    }

    public void setPartOfTheDay(PartOfTheDay partOfTheDay) {
        this.partOfTheDay = partOfTheDay;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
